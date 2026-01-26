---
type: method
interface: IAdvancedSaveAsOptions
member: GetItemsNameAndPath
returns: void
parameters:
  -
    name: IdsList
    type: System.Object
    description: Array of component reference IDs
  -
    name: NamesList
    type: System.Object
    description: Array of component reference names
  -
    name: PathsList
    type: System.Object
    description: Array of component reference paths
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - file-io
related: []
keywords:
  - getitemsnameandpath
  - iadvancedsaveasoptions
  - advanced
  - save
  - options
  - items
  - name
  - path
  - ids
  - list
  - object
  - names
  - paths
  - void
---

# IAdvancedSaveAsOptions.GetItemsNameAndPath

Gets all reference components' names and paths.

## Signature

```csharp
void GetItemsNameAndPath( 
   out System.Object
IdsList
,
   out System.Object
NamesList
,
   out System.Object
PathsList
)
```
## Parameters

- `IdsList` (System.Object): Array of component reference IDs
- `NamesList` (System.Object): Array of component reference names
- `PathsList` (System.Object): Array of component reference paths

## Return Value

Unknown.

## Remarks

IdsList, NamesList, and PathsList are the same array size and map one to one. Call this method to obtain the current list of component references before calling
IAdvancedSaveAsOptions::ModifyItemsNameAndPath
to modify them.
This method lists component references according to the Options parameter that was specified in the call to
IModelDocExtension::GetAdvancedSaveAsOptions
.

## Examples

- IAdvancedSaveAsOptions (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedSaveAsOptions)