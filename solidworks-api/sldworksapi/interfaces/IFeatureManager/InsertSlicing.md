---
type: method
interface: IFeatureManager
member: InsertSlicing
returns: System.Object
parameters:
  -
    name: SlicingData
    type: System.Object
    description: ISlicingData (see Remarks )
  -
    name: Errors
    type: System.Int32
    description: Errors as defined in swInsertSlicingError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - insertslicing
  - ifeaturemanager
  - feature
  - manager
  - insert
  - slicing
  - data
  - object
  - errors
  - int32
  - islicingdata
---

# IFeatureManager.InsertSlicing

Creates and inserts slicing into the FeatureManager design tree.

## Signature

```csharp
System.Object InsertSlicing( 
   System.Object
SlicingData
,
   out System.Int32
Errors
)
```
## Parameters

- `SlicingData` (System.Object): ISlicingData (see Remarks )
- `Errors` (System.Int32): Errors as defined in swInsertSlicingError_e

## Return Value

Array of sketch and reference plane objects

## Remarks

This method invokes the Slicing tool. For more information, refer to
SOLIDWORKS Help > Parts and Features > Controlling Parts > Slicing Tool
.
Before calling this method:
Pre-select in the graphics area a planar entity (to create a linear pattern of slices) or a combination of a linear entity and a point entity (to create an angular pattern of slices whose axis is the linear entity).
Use
IFeatureManager::GetSlicingData
to get an ISlicingData object.
Set
ISlicingData::PlaneReferences
if step 1 is not performed. Specify a planar entity or a combination of a linear entity and a point entity as specified in step 1.
Set other ISlicingData properties.
Populate SlicingData with the ISlicingData object.
After calling this method:
Use the array of sketch and reference plane objects returned by this method to perform further work.
If
ISlicingData::AddSlicingPlanesAndSketchesToFolder
was set to true, then a
Slice1
folder in the FeatureManager design tree is created containing the slicing planes and sketches. You can edit the slicing planes and sketches individually as needed.
Delete the Slice1 folder and its contents to remove slicing from the model.

## Examples

- ISlicingData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISlicingData)