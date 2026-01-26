---
type: method
interface: IFeatureManager
member: CreateSaveBodyFeature
returns: System.Object
parameters:
  -
    name: Bodies
    type: System.Object
    description: Array of solid bodies to save as parts (See Remarks)
  -
    name: FilePaths
    type: System.Object
    description: Array of solid bodies to save as parts (See Remarks)
  -
    name: AssemName
    type: System.String
    description: Array of paths and filenames of the part documents to which to save Bodies
  -
    name: ConsumeBody
    type: System.Boolean
    description: Array of paths and filenames of the part documents to which to save Bodies
  -
    name: CopyCustomProperty
    type: System.Boolean
    description: Path and filename of the assembly document to which to save Bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
  - geometry
related:
  - ISaveBodyFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - save
  - bodies
  - createsavebodyfeature
  - ifeaturemanager
  - manager
  - create
  - body
  - object
  - file
  - paths
  - assem
  - name
  - string
  - consume
  - boolean
  - copy
  - custom
  - assembly
  - vba
---

# IFeatureManager.CreateSaveBodyFeature

Creates a Save Bodies feature and creates part and assembly documents of the save bodies.

## Signature

```csharp
System.Object CreateSaveBodyFeature( 
   System.Object
Bodies
,
   System.Object
FilePaths
,
   System.String
AssemName
,
   System.Boolean
ConsumeBody
,
   System.Boolean
CopyCustomProperty
)
```
## Parameters

- `Bodies` (System.Object): Array of solid bodies to save as parts (See Remarks)
- `FilePaths` (System.Object): Array of solid bodies to save as parts (See Remarks)
- `AssemName` (System.String): Array of paths and filenames of the part documents to which to save Bodies
- `ConsumeBody` (System.Boolean): Array of paths and filenames of the part documents to which to save Bodies
- `CopyCustomProperty` (System.Boolean): Path and filename of the assembly document to which to save Bodies

## Return Value

Feature

## Remarks

If any solid bodies in Bodies are invalid, they are skipped/ignored.
For parameter...
Specify...
ConsumeBody
VARIANT_TRUE (-1) to consume all bodies in the original part, VARIANT_FALSE (0) to not
CopyCustomProperty
VARIANT_TRUE (-1) to copy custom properties to the new parts, VARIANT_FALSE (0) to not

## Examples

- Create Save Bodies Feature and Create an Assembly (VBA) (Create_Save_Bodies_Feature_and_Create_Assembly_Example_VB.htm)

## See Also

- `ISaveBodyFeatureData`