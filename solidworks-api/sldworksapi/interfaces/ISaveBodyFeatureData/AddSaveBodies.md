---
type: method
interface: ISaveBodyFeatureData
member: AddSaveBodies
returns: System.Boolean
parameters:
  -
    name: Bodies
    type: System.Object
    description: Array of bodies to add to the Save Bodies feature
  -
    name: FilePaths
    type: System.Object
    description: Array of path and filenames of part documents to which to save Bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
  - geometry
related:
  - ISaveBodyFeatureData.GetSaveBodies
  - ISaveBodyFeatureData.RemoveSaveBodies
keywords:
  - addsavebodies
  - isavebodyfeaturedata
  - save
  - body
  - feature
  - data
  - add
  - bodies
  - object
  - file
  - paths
  - boolean
---

# ISaveBodyFeatureData.AddSaveBodies

Adds the specified bodies to the Save Bodies feature and saves them as part documents on disk.

## Signature

```csharp
System.Boolean AddSaveBodies( 
   System.Object
Bodies
,
   System.Object
FilePaths
)
```
## Parameters

- `Bodies` (System.Object): Array of bodies to add to the Save Bodies feature
- `FilePaths` (System.Object): Array of path and filenames of part documents to which to save Bodies

## Return Value

True if the bodies are added to the Save Bodies feature and saved as part documents on disk, false if not

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ISaveBodyFeatureData.GetSaveBodies`
- `ISaveBodyFeatureData.RemoveSaveBodies`