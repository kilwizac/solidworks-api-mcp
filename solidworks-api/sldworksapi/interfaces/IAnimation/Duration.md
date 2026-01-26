---
type: property
interface: IAnimation
member: Duration
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - duration
  - ianimation
  - animation
  - double
readonly: true
---

# IAnimation.Duration

Obsolete. Not superseded.

## Signature

```csharp
System.Double Duration {get;}
```
## Parameters

None.

## Return Value

Length of time, in seconds, this animation plays

## Remarks

IAnimation::Speed
affects the duration of the animation. Animation::Speed allows you
to specify whether or not to play the animation at half speed or double speed, which
halves or doubles the animation duration.
If you use Animation::Duration while an animation is playing, then you might not get
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