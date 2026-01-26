---
type: method
interface: ISurfRevolveFeatureData
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
  - ISurfRevolveFeatureData.SetRevolutionAngle
keywords:
  - getrevolutionangle
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
---

# ISurfRevolveFeatureData.GetRevolutionAngle

Gets the angle for this surface revolve feature in Direction 1 or Direction 2.

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

Angle of the revolution

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `ISurfRevolveFeatureData.SetRevolutionAngle`