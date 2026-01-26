---
type: property
interface: IBomFeature
member: KeepCurrentItemNumbers
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
related: []
keywords:
  - keepcurrentitemnumbers
  - ibomfeature
  - bom
  - feature
  - keep
  - current
  - item
  - numbers
  - boolean
readonly: null
---

# IBomFeature.KeepCurrentItemNumbers

Gets or sets whether item numbers are kept with their components when reordering rows of a BOM table.

## Signature

```csharp
System.Boolean KeepCurrentItemNumbers {get; set;}
```
## Parameters

None.

## Return Value

True if item numbers are kept with their components when reordering rows, false if not

## Remarks

Rows in a BOM table can be reordered in several different ways. For example, you can interactively reorder the rows manually in the
Bill of Materials Properties
dialog box and you can programmatically reorder rows using
IBomFeature::FollowAssemblyOrder2
.

## Examples

- IBomFeature (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBomFeature)