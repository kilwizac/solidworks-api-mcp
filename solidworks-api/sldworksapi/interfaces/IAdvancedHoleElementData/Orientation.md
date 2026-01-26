---
type: property
interface: IAdvancedHoleElementData
member: Orientation
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - orientation
  - iadvancedholeelementdata
  - advanced
  - hole
  - element
  - data
  - int32
readonly: null
---

# IAdvancedHoleElementData.Orientation

Gets or sets the orientation of this Advanced Hole element.

## Signature

```csharp
System.Int32 Orientation {get; set;}
```
## Parameters

None.

## Return Value

Orientation as defined in swHoleElementOrientation_e (see Remarks )

## Remarks

This property is not valid if
IAdvancedHoleElementData::ElementType
is set to
swAdvWzdGeneralHoleTypes_e
:
swAdvWzdStraight
swAdvWzdStraightTap

## Examples

- IAdvancedHoleElementData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedHoleElementData)