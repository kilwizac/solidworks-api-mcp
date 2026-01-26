---
type: property
interface: ILocalCircularPatternFeatureData
member: EqualSpacing
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILocalCircularPatternFeatureData.EqualSpacing2
keywords:
  - equalspacing
  - ilocalcircularpatternfeaturedata
  - local
  - circular
  - pattern
  - feature
  - data
  - equal
  - spacing
  - boolean
readonly: null
---

# ILocalCircularPatternFeatureData.EqualSpacing

Gets or sets whether to equally space the pattern instances in Direction 1 in this circular component pattern feature.

## Signature

```csharp
System.Boolean EqualSpacing {get; set;}
```
## Parameters

None.

## Return Value

True to equally space the pattern instances in Direction 1, false to not

## Remarks

If this property is set to true, then
ILocalCircularPatternFeatureData::Spacing
is automatically set to 360 degrees.

## Examples

- ILocalCircularPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ILocalCircularPatternFeatureData)

## See Also

- `ILocalCircularPatternFeatureData.EqualSpacing2`