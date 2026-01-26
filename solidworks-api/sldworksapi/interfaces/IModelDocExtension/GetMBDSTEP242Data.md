---
type: method
interface: IModelDocExtension
member: GetMBDSTEP242Data
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - getmbdstep242data
  - imodeldocextension
  - model
  - doc
  - extension
  - mbdstep242
  - data
  - object
---

# IModelDocExtension.GetMBDSTEP242Data

Gets the SOLIDWORKS MBD STEP 242 data object.

## Signature

```csharp
System.Object GetMBDSTEP242Data()
```
## Parameters

None.

## Return Value

IMBDSTEP242Data

## Remarks

SOLIDWORKS Model Based Definition (MBD) is an integrated drawingless manufacturing solution for SOLIDWORKS.
This method requires that the SOLDWORKS MBD add-in be loaded. (
ISldWorks::LoadAddIn
)
See the SOLIDWORKS Help for details about MBD.