---
type: property
interface: IAdvancedHoleElementData
member: Size
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - size
  - iadvancedholeelementdata
  - advanced
  - hole
  - element
  - data
  - string
readonly: null
---

# IAdvancedHoleElementData.Size

Gets or sets the size of this Advanced Hole element.

## Signature

```csharp
System.String Size {get; set;}
```
## Parameters

None.

## Return Value

Size specific to the type of hole element

## Remarks

The size must be appropriate for the
IAdvancedHoleElementData::FastenerType
.
Valid sizes are listed in the Element Specification section of the Advanced Hole PropertyManager. Select a type from the Type dropdown and inspect the Size dropdown for valid sizes.

## Examples

- IAdvancedHoleElementData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedHoleElementData)