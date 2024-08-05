import { useControls } from 'leva'


const useLevaControls = () => {
    const levaPanelControlers = useControls({
        scale : 1.0,
        modelPositionX : {value : 0.6, min : -10, max : 10},
        modelPositionY : {value : -2.0, min : -10, max : 10},
        modelPositionZ : {value : 0.4, min : -10, max : 10},
        rotationX : {value : -0.4, min : -10, max : 10},
        rotationY : {value : -1.6, min : -10, max : 10},
        rotationZ : {value : -0.5, min : -10, max : 10},
        fov: { value: 50, min: 10, max: 120 },
        cameraPositionX: { value: 0, min: -10, max: 10 },
        cameraPositionY: { value: 3.0, min: -10, max: 10 },
        cameraPositionZ: { value: 12.8, min: -20, max: 20 },
      })

    return levaPanelControlers
}

export default useLevaControls