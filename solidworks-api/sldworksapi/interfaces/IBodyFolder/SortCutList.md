---
type: method
interface: IBodyFolder
member: SortCutList
returns: System.Boolean
parameters:
  -
    name: CutListSortOptions
    type: System.Object
    description: ICutListSortOptions
  -
    name: IgnoreInvalidFacesOrFeatures
    type: System.Boolean
    description: True to sort bodies ignoring any invalid excluded faces/features, false to not sort the bodies if there are invalid excluded faces/features (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related: []
keywords:
  - sortcutlist
  - ibodyfolder
  - body
  - folder
  - sort
  - cut
  - list
  - options
  - object
  - ignore
  - invalid
  - faces
  - features
  - boolean
---

# IBodyFolder.SortCutList

Sorts the cut list.

## Signature

```csharp
System.Boolean SortCutList( 
   System.Object
CutListSortOptions
,
   System.Boolean
IgnoreInvalidFacesOrFeatures
)
```
## Parameters

- `CutListSortOptions` (System.Object): ICutListSortOptions
- `IgnoreInvalidFacesOrFeatures` (System.Boolean): True to sort bodies ignoring any invalid excluded faces/features, false to not sort the bodies if there are invalid excluded faces/features (see Remarks )

## Return Value

True if sorting is successful, false if not

## Remarks

Use
IBodyFolder::GetCutListSortOptions
to populate CutListSortOptions.
This method applies the CutListSortOptions settings, sorts the cut list, and refreshes the cut list in the FeatureManager design tree.
In the Cut List Sorting Options PropertyManager you select faces/features to exclude from sorting. If some of those selected faces/features to exclude are invalid, i.e., they are not of selection type BODYFEATURE or FACE or they cannot be excluded (see the end of this
Remark
), a dialog box pops up during the sort operation with:
----------------------------------------------------------------------
Failed to exclude some of the selected faces in cut list sorting. Try selecting the corresponding features instead.
Would you like to continue:
Yes (Bodies will be sorted ignoring some of the excluded faces.)
No (Bodies will not be sorted.)
----------------------------------------------------------
IgnoreInvalidFacesOrFeatures handles the situation when some of the body faces/features selected for exclusion (
ICutListSortOptions::SetFacesOrFeaturesToExclude
) can not be excluded.
Set IgnoreInvalidFacesOrFeatures to:
True, to sort bodies ignoring any invalid excluded faces/features.
False, to not sort the bodies if there are invalid excluded faces/features.
If you set IgnoreInvalidFacesOrFeatures to false and there are invalid faces/features in the exclusion list, then this method will not sort the cut list.
Other examples of faces and features that are invalid for exclusion:
Chamfers that remove an entire face.
Suppressed features.
Features that create new bodies from sketches, such as boss-extrude, revolve, and sweep.
Certain sheet metal features.
For more information, see the
Sorting Cut Lists
topics in the SOLIDWORKS Design user-interface help.

## Examples

- IBodyFolder (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IBodyFolder)