---
type: property
interface: IWeldBead
member: SolidFill
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related: []
keywords:
  - solidfill
  - iweldbead
  - weld
  - bead
  - solid
  - fill
  - boolean
readonly: null
---

# IWeldBead.SolidFill

Gets or sets whether to fill the weld bead annotation.

## Signature

```csharp
System.Boolean SolidFill {get; set;}
```
## Parameters

None.

## Return Value

True to fill the weld bead, false to not (see Remarks ) EndOLEPropertyRow

## Remarks

To get the triangular-shaped weld treatment, use the polygon-related
IDisplayData
APIs, which provide you with the geometry information. See the example for more information.

## Examples

- IWeldBead (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldBead)