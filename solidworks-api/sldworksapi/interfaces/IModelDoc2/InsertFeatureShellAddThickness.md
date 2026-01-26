---
type: method
interface: IModelDoc2
member: InsertFeatureShellAddThickness
returns: void
parameters:
  -
    name: Thickness
    type: System.Double
    description: Shell thickness in meters
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related: []
keywords:
  - feature
  - see
  - also
  - ifeature
  - shell
  - ishellfeaturedata
  - thickness
  - insertfeatureshelladdthickness
  - imodeldoc2
  - model
  - doc2
  - insert
  - add
  - double
  - void
---

# IModelDoc2.InsertFeatureShellAddThickness

Adds thickness to a face in a multi-thickness shell feature.

## Signature

```csharp
void InsertFeatureShellAddThickness( 
   System.Double
Thickness
)
```
## Parameters

- `Thickness` (System.Double): Shell thickness in meters

## Return Value

Unknown.

## Remarks

This method works with
IModelDoc2::InsertFeatureShell
to create a multi-thickness shell as follows:
Select the faces to remove to create the shell feature by calling
IModelDocExtension::SelectByID2
with Marks of 1.
Select faces with alternate thicknesses using Marks of 2.
Call this method once for each of the faces selected in step 2.
Call IModelDoc2::InsertFeatureShell.