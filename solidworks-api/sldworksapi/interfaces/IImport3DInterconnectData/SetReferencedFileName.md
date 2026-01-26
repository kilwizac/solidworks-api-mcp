---
type: method
interface: IImport3DInterconnectData
member: SetReferencedFileName
returns: void
parameters:
  -
    name: FileName
    type: System.String
    description: Full path name of the linked non-native CAD file
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - file-io
related:
  - IImport3DInterconnectData.GetReferencedFileName
keywords:
  - setreferencedfilename
  - iimport3dinterconnectdata
  - import3
  - interconnect
  - data
  - referenced
  - file
  - name
  - string
  - void
---

# IImport3DInterconnectData.SetReferencedFileName

Sets the full path name of the proprietary, non-native CAD file.

## Signature

```csharp
void SetReferencedFileName( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Full path name of the linked non-native CAD file

## Return Value

Unknown.

## See Also

- `IImport3DInterconnectData.GetReferencedFileName`