---
type: method
interface: IRevolveFeatureData2
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
    description: Angle of revolution
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRevolveFeatureData2.GetRevolutionAngle
  - IRevolveFeatureData2.ReverseDirection
keywords:
  - setrevolutionangle
  - irevolvefeaturedata2
  - revolve
  - feature
  - data2
  - revolution
  - angle
  - forward
  - boolean
  - double
  - void
---

# IRevolveFeatureData2.SetRevolutionAngle

Sets the angle of the revolve feature in Direction 1 or Direction 2.

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
- `Angle` (System.Double): Angle of revolution

## Return Value

Unknown.

## See Also

- `IRevolveFeatureData2.GetRevolutionAngle`
- `IRevolveFeatureData2.ReverseDirection`