import React, { createContext, useContext, useState, useEffect } from 'react';

export const normalizePath = (rawPath: string): string => {
  if (!rawPath) return '/';

  let p = rawPath.trim();

  // Handle hash-based URLs (e.g. /#/work or #/work or #work)
  if (p.includes('#')) {
    const hashIndex = p.indexOf('#');
    const hashPart = p.substring(hashIndex + 1);
    const sectionMap: Record<string, string> = {
      work: '/work',
      projects: '/work',
      ongoing: '/work',
      writing: '/writing',
      ebooks: '/writing',
      about: '/about',
      contact: '/contact',
    };
    if (sectionMap[hashPart]) {
      return sectionMap[hashPart];
    }
    if (hashPart.startsWith('/')) {
      p = hashPart;
    } else if (hashPart) {
      p = '/' + hashPart;
    }
  }

  // Remove query string if any
  if (p.includes('?')) {
    p = p.split('?')[0];
  }

  // Ensure starts with '/'
  if (!p.startsWith('/')) {
    p = '/' + p;
  }

  // Remove trailing slash unless it's root '/'
  if (p.length > 1 && p.endsWith('/')) {
    p = p.replace(/\/+$/, '');
  }

  return p || '/';
};

const getInitialPath = (): string => {
  if (typeof window === 'undefined') return '/';
  if (window.location.hash && window.location.hash !== '#') {
    return normalizePath(window.location.hash);
  }
  return normalizePath(window.location.pathname);
};

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);

  useEffect(() => {
    const handleLocationChange = () => {
      const path =
        window.location.hash && window.location.hash !== '#'
          ? normalizePath(window.location.hash)
          : normalizePath(window.location.pathname);
      setCurrentPath(path);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (to: string) => {
    const target = normalizePath(to);

    if (target === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    try {
      window.history.pushState({}, '', target);
    } catch {
      window.location.hash = target;
    }
    setCurrentPath(target);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
};

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ to, children, className, onClick, ...rest }) => {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && !e.ctrlKey && !e.metaKey && !e.shiftKey && e.button === 0) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
};
