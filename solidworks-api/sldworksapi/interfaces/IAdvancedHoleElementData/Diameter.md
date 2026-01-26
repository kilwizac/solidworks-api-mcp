---
type: property
interface: IAdvancedHoleElementData
member: Diameter
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - diameter
  - iadvancedholeelementdata
  - advanced
  - hole
  - element
  - data
  - double
readonly: null
---

# IAdvancedHoleElementData.Diameter

Gets or sets the diameter of this Advanced Hole element.

## Signature

```csharp
System.Double Diameter {get; set;}
```
## Parameters

None.

## Return Value

Diameter of the Advanced Hole

## Remarks

This property is valid only if
IAdvancedHoleElementData::DiameterOverride
is set to true.

## Examples

- IAdvancedHoleElementData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedHoleElementData)