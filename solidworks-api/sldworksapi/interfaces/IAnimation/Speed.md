---
type: property
interface: IAnimation
member: Speed
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - speed
  - ianimation
  - animation
  - int32
readonly: null
---

# IAnimation.Speed

Obsolete. Not superseded.

## Signature

```csharp
System.Int32 Speed {get; set;}
```
## Parameters

None.

## Return Value

Speed at which the animation plays as defined by swAnimationPlaySpeed_e

## Remarks

This property affects the duration of the animation. It allows you to specify whether
or not to play the animation at half speed or double speed, which halves or doubles
the animation duration.
If you use
IAnimation::Duration
while an animation is playing, then you might not get
the same result as when the animation is not running.
If you get the Animation object using...
And then use...
Then the duration...
ISimulation::Animation
Animation::Duration
Is at the normal playing speed
ISimulation::PlayAnimation
Animation::Duration
Might be a different value because the animation is playing and the
Animation
Controller
speed may be set to
Normal
,
Slow Play
, or
Fast Play