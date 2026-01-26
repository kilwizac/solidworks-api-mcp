---
type: method
interface: ISelectionSetFolder
member: GetSelectionSetByName
returns: System.Object
parameters:
  -
    name: Name
    type: System.String
    description: Name of the selection set
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related:
  - ISelectionSetFolder.GetSelectionSets
keywords:
  - selection
  - iselectonset
  - getselectionsetbyname
  - iselectionsetfolder
  - folder
  - name
  - string
  - object
  - objects
  - vb
  - net
  - vba
---

# ISelectionSetFolder.GetSelectionSetByName

Gets the specified selection set.

## Signature

```csharp
System.Object GetSelectionSetByName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Name of the selection set

## Return Value

Selection set

## Remarks

To get the name of a selection folder to pass to this method, you can traverse
items in the FeatureManager design tree
. See the examples.

## Examples

- Get Objects in Selection Set (C#) (Get_Objects_in_Selection_Set_Example_CSharp.htm)
- Get Objects in Selection Set (VB.NET) (Get_Objects_in_Selection_Set_Example_VBNET.htm)
- Get Objects in Selection Set (VBA) (Get_Objects_in_Selection_Set_Example_VB.htm)

## See Also

- `ISelectionSetFolder.GetSelectionSets`