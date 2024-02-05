import { useMouse } from '@vueuse/core';

export function useMouseFollower() {
    const { x, y } = useMouse();
    const circleStyle = ref({});
  
    // Watch for changes in mouse position and update the style accordingly
    watch([x, y], ([newX, newY]) => {
      circleStyle.value = {
        position: 'absolute',
        left: `${newX - 14 }px`,
        top: `${newY - 20}px`,
        width: '15px',
        height: '15px',
        borderRadius: '50%',
        backgroundColor: 'white',
        zIndex: 10000,
      };
    });
  
    return { circleStyle };
  }