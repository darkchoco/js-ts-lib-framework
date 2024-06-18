import { useEffect, useRef } from 'react';

export default function useUpdate(cb) {
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = false;
      return;
    }
    cb();
  });
}
