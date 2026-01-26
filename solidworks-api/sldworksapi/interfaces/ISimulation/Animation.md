---
type: property
interface: ISimulation
member: Animation
returns: Animation
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - animation
  - isimulation
  - simulation
readonly: true
---

# ISimulation.Animation

Obsolete. Not superseded.

## Signature

```csharp
Animation Animation {get;}
```
## Parameters

None.

## Return Value

Animation

## Remarks

To...
Then..
.
Get the duration of an animation
Use
IAnimation::Duration
after using this property
Play the animation
Use
IAnimation::Play
after using this property
Display the
Animation Controller
pop-up toolbar
Use
ISimulation::PlayAnimation
instead of using this property
NOTE:
Use only the following IAnimation property and method with ISimulation::Animation: IAnimation::Duration and IAnimation::PlayAnimation. The other IAnimation properties and methods do nothing with an IAnimation object returned by ISimlulation::Animation because they expect an animation to be playing. Use
ISimluation::IsAnimationPlaying
to determine whether an animation is playing.