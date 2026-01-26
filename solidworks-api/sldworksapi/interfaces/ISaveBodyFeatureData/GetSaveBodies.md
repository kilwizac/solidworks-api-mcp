---
type: method
interface: ISaveBodyFeatureData
member: GetSaveBodies
returns: void
parameters:
  -
    name: Bodies
    type: System.Object
    description: Array of save bodies
  -
    name: FilePaths
    type: System.Object
    description: Array of save bodies
  -
    name: Flags
    type: System.Object
    description: Array of paths and filenames for the part documents of Bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
  - geometry
related:
  - ISaveBodyFeatureData.AddSaveBodies
  - ISaveBodyFeatureData.GetSaveBodiesCount
  - ISaveBodyFeatureData.RemoveSaveBodies
keywords:
  - getsavebodies
  - isavebodyfeaturedata
  - save
  - body
  - feature
  - data
  - bodies
  - object
  - file
  - paths
  - flags
  - void
---

# ISaveBodyFeatureData.GetSaveBodies

Gets the save bodies in this Save Bodies feature.

## Signature

```csharp
void GetSaveBodies( 
   out System.Object
Bodies
,
   out System.Object
FilePaths
,
   out System.Object
Flags
)
```
## Parameters

- `Bodies` (System.Object): Array of save bodies
- `FilePaths` (System.Object): Array of save bodies
- `Flags` (System.Object): Array of paths and filenames for the part documents of Bodies

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ISaveBodyFeatureData.AddSaveBodies`
- `ISaveBodyFeatureData.GetSaveBodiesCount`
- `ISaveBodyFeatureData.RemoveSaveBodies`