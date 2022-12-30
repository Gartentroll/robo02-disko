input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 5; index++) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 0, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1181, 0, 255, 0, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
    }
})
input.onButtonPressed(Button.AB, function () {
    music.stopAllSounds()
    Rover.MotorStopAll(MotorActions.Stop)
    music.setBuiltInSpeakerEnabled(false)
})
input.onButtonPressed(Button.B, function () {
    music.setVolume(100)
    music.setBuiltInSpeakerEnabled(true)
    Rover.MotorRunDual(255, -255)
    for (let index = 0; index < 4; index++) {
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED1), Rover.showColor(0xff0000))
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED2), Rover.showColor(0x00ff00))
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED3), Rover.showColor(0x0000ff))
        Rover.setRGBLED(Rover.ledIndex(LEDIndex.LED4), Rover.showColor(0xff0080))
        Rover.setALLRGB(Rover.showColor(0x007fff))
        Rover.setALLRGB(Rover.showColor(0xff0000))
    }
})
basic.forever(function () {
	
})
