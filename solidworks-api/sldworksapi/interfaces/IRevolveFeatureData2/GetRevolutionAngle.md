---
type: method
interface: IRevolveFeatureData2
member: GetRevolutionAngle
returns: System.Double
parameters:
  -
    name: Forward
    type: System.Boolean
    description: True gets the angle in Direction 1, false gets the angle in Direction 2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IRevolveFeatureData2.ReverseDirection
  - IRevolveFeatureData2.SetRevolutionAngle
keywords:
  - getrevolutionangle
  - irevolvefeaturedata2
  - revolve
  - feature
  - data2
  - revolution
  - angle
  - forward
  - boolean
  - double
---

# IRevolveFeatureData2.GetRevolutionAngle

Gets the angle of the revolve feature in Direction 1 or Direction 2.

## Signature

```csharp
System.Double GetRevolutionAngle( 
   System.Boolean
Forward
)
```
## Parameters

- `Forward` (System.Boolean): True gets the angle in Direction 1, false gets the angle in Direction 2

## Return Value

Angle of revolution

## See Also

- `IRevolveFeatureData2.ReverseDirection`
- `IRevolveFeatureData2.SetRevolutionAngle`