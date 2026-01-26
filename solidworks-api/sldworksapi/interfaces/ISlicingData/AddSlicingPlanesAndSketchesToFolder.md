---
type: property
interface: ISlicingData
member: AddSlicingPlanesAndSketchesToFolder
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - sketches
related: []
keywords:
  - addslicingplanesandsketchestofolder
  - islicingdata
  - slicing
  - data
  - add
  - planes
  - sketches
  - folder
  - boolean
readonly: null
---

# ISlicingData.AddSlicingPlanesAndSketchesToFolder

Gets or sets whether to add slicing planes and sketches to a folder in the FeatureManager design tree.

## Signature

```csharp
System.Boolean AddSlicingPlanesAndSketchesToFolder {get; set;}
```
## Parameters

None.

## Return Value

True to add slicing planes and sketches to a folder in the FeatureManager design tree, false to not

## Remarks

If this property is set to true, then after slicing, a
Slice1
folder is created in the FeatureManager design tree from which you can explicitly select and edit the slicing sketches and reference planes.

## Examples

- ISlicingData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISlicingData)