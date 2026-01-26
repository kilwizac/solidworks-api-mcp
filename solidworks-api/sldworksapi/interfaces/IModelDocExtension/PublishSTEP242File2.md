---
type: method
interface: IModelDocExtension
member: PublishSTEP242File2
returns: System.Int32
parameters:
  -
    name: MBDSTEP242Data
    type: System.Object
    description: IMBDSTEP242Data
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - file-io
  - ui
related:
  - IMBD3DPdfData.CreateAttachSTEP242
  - IModelDocExtension.PublishTo3DPDF
keywords:
  - solidworks
  - mbd
  - step
  - 242
  - mbdstep242data
  - see
  - imbstep242data
  - publishstep242file2
  - imodeldocextension
  - model
  - doc
  - extension
  - publish
  - step242
  - file2
  - mbdstep242
  - data
  - object
  - int32
---

# IModelDocExtension.PublishSTEP242File2

Exports the SOLIDWORKS MBD 3D part or assembly to a STEP 242 file.

## Signature

```csharp
System.Int32 PublishSTEP242File2( 
   System.Object
MBDSTEP242Data
)
```
## Parameters

- `MBDSTEP242Data` (System.Object): IMBDSTEP242Data

## Return Value

Status as defined by swStep242Error_e

## Remarks

This method requires that the SOLDWORKS MBD add-in be loaded. (
ISldWorks::LoadAddIn
)
See the SOLIDWORKS Help for details about MBD.

## See Also

- `IMBD3DPdfData.CreateAttachSTEP242`
- `IModelDocExtension.PublishTo3DPDF`