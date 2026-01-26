---
type: method
interface: IMBD3DPdfData
member: SetAttachments
returns: void
parameters:
  -
    name: Values
    type: System.Object
    description: Array of strings of the fully qualified paths of the files to include as attachments
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IMBD3DPdfData.GetAttachments
keywords:
  - setattachments
  - imbd3dpdfdata
  - imbd3
  - pdf
  - data
  - attachments
  - values
  - object
  - void
  - attach
  - files
  - mbd
  - 3d
  - vb
  - net
  - vba
---

# IMBD3DPdfData.SetAttachments

Sets the fully qualified paths of the files to include as attachments when publishing to SOLIDWORKS MBD 3D PDF.

## Signature

```csharp
void SetAttachments( 
   System.Object
Values
)
```
## Parameters

- `Values` (System.Object): Array of strings of the fully qualified paths of the files to include as attachments

## Return Value

Unknown.

## Examples

- Attach Files to MBD 3D PDF (C#) (Attach_Files_to_MBD_3D_PDF_Example_CSharp.htm)
- Attach Files to MBD 3D PDF (VB.NET) (Attach_Files_to_MBD_3D_PDF_Example_VBNET.htm)
- Attach Files to MBD 3D PDF (VBA) (Attach_Files_to_MBD_3D_PDF_Example_VB.htm)

## See Also

- `IMBD3DPdfData.GetAttachments`