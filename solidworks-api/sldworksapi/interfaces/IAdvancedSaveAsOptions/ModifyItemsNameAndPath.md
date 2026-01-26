---
type: method
interface: IAdvancedSaveAsOptions
member: ModifyItemsNameAndPath
returns: System.Int32
parameters:
  -
    name: IdsList
    type: System.Object
    description: Array of reference component IDs (see Remarks )
  -
    name: NamesList
    type: System.Object
    description: Array of new reference component names
  -
    name: PathsList
    type: System.Object
    description: Array of new reference component paths
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
related:
  - IAdvancedSaveAsOptions.SaveAsPreviousVersion
keywords:
  - modifyitemsnameandpath
  - iadvancedsaveasoptions
  - advanced
  - save
  - options
  - modify
  - items
  - name
  - path
  - ids
  - list
  - object
  - names
  - paths
  - int32
---

# IAdvancedSaveAsOptions.ModifyItemsNameAndPath

Modifies the specified reference components with the specified names and paths.

## Signature

```csharp
System.Int32 ModifyItemsNameAndPath( 
   System.Object
IdsList
,
   System.Object
NamesList
,
   System.Object
PathsList
)
```
## Parameters

- `IdsList` (System.Object): Array of reference component IDs (see Remarks )
- `NamesList` (System.Object): Array of new reference component names
- `PathsList` (System.Object): Array of new reference component paths

## Return Value

Return code as defined in swSaveItemsPathError_e

## Remarks

Before calling this method call:
IAdvancedSaveAsOptions::SetPrefixSuffixToAll
IAdvancedSaveAsOptions::GetItemsNameAndPath
to populate IDsList.
IdsList, NamesList, and PathsList are the same array size and map one to one. Use Nothing or null to specify no change to an individual reference in each array.
If you use this method to change the name or path of the top-level document, then it overrides the name or path passed in the Name parameter of
IModelDocExtension::SaveAs3
.

## Examples

- IAdvancedSaveAsOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedSaveAsOptions)

## See Also

- `IAdvancedSaveAsOptions.SaveAsPreviousVersion`