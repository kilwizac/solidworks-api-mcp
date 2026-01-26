---
type: property
interface: ITaperedTapElementData
member: EndConditionOverride
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - endconditionoverride
  - itaperedtapelementdata
  - tapered
  - tap
  - element
  - data
  - end
  - condition
  - override
  - boolean
readonly: null
---

# ITaperedTapElementData.EndConditionOverride

Gets or sets whether to override the end condition of this tapered tap hole element.

## Signature

```csharp
System.Boolean EndConditionOverride {get; set;}
```
## Parameters

None.

## Return Value

True to override the end condition, false to not (see Remarks )

## Remarks

This property can be set only if
IAdvancedHoleFeatureData::UseBaselineDimensions
is set to false.
Set this property to true and specify
IAdvancedHoleElementData::EndCondition
to override the end condition.

## Examples

- ITaperedTapElementData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ITaperedTapElementData)