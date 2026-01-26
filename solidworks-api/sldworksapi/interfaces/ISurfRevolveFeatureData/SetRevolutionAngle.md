---
type: method
interface: ISurfRevolveFeatureData
member: SetRevolutionAngle
returns: void
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True sets the angle in Direction 1, false sets the angle in Direction 2
  -
    name: Angle
    type: System.Double
    description: Angle of the revolution
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISurfRevolveFeatureData.GetRevolutionAngle
keywords:
  - setrevolutionangle
  - isurfrevolvefeaturedata
  - surf
  - revolve
  - feature
  - data
  - revolution
  - angle
  - forward
  - boolean
  - double
  - void
---

# ISurfRevolveFeatureData.SetRevolutionAngle

Sets the angle for this surface revolve feature in Direction 1 or Direction 2.

## Signature

```csharp
void SetRevolutionAngle( 
   System.Boolean
Forward
,
   System.Double
Angle
)
```
## Parameters

- `Forward` (System.Boolean): True sets the angle in Direction 1, false sets the angle in Direction 2
- `Angle` (System.Double): Angle of the revolution

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfRevolveFeatureData.GetRevolutionAngle`