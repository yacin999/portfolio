import { useControls } from 'leva'


const useLevaControls = () => {
    const levaPanelControlers = useControls({
        modelPositionX : {value : 0, min : -10, max : 10},
        modelPositionY : {value : 0, min : -10, max : 10},
        modelPositionZ : {value : 0, min : -10, max : 10},
        rotationX : {value : 0, min : -20, max : 20},
        rotationY : {value : 0, min : -20, max : 20},
        rotationZ : {value : 0, min : -20, max : 20},
        fov: { value: 75, min: 10, max: 120 },
        cameraPositionX: { value: 0, min: -10, max: 10 },
        cameraPositionY: { value: 5, min: -10, max: 10 },
        cameraPositionZ: { value: 10, min: -20, max: 20 },
      })

    return levaPanelControlers
}

export default useLevaControls