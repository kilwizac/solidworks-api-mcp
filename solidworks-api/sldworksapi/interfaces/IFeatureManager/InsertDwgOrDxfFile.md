---
type: method
interface: IFeatureManager
member: InsertDwgOrDxfFile
returns: Feature
parameters:
  -
    name: FileName
    type: System.String
    description: Name of the DXF or DWG image file
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - features
  - file-io
related: []
keywords:
  - insertdwgordxffile
  - ifeaturemanager
  - feature
  - manager
  - insert
  - dwg
  - dxf
  - file
  - name
  - string
---

# IFeatureManager.InsertDwgOrDxfFile

Obsolete. Superseded by IFeatureManager::InsertDwgOrDxfFile2.

## Signature

```csharp
Feature InsertDwgOrDxfFile( 
   System.String
FileName
)
```
## Parameters

- `FileName` (System.String): Name of the DXF or DWG image file

## Return Value

Pointer to the IFeature object

## Remarks

This method returns:
Nothing or null if the file contains solid bodies data.
is not supported for use in assembly documents.
You must also select a plane or planar surface before calling this method.