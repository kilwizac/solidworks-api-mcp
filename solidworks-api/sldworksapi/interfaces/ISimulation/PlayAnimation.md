---
type: method
interface: ISimulation
member: PlayAnimation
returns: Animation
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - playanimation
  - isimulation
  - simulation
  - play
  - animation
---

# ISimulation.PlayAnimation

Obsolete. Not superseded.

## Signature

```csharp
Animation PlayAnimation()
```
## Parameters

None.

## Return Value

Animation

## Remarks

If an animation is playing when this method is used, then this method returns the
IAnimation
object for that animation. To check to see if an animation is currently playing, use
ISimulation::IsAnimationPlaying
.