---
type: method
interface: IModelDoc2
member: SetFeatureManagerWidth
returns: System.Int32
parameters:
  -
    name: Width
    type: System.Int32
    description: Width of the FeatureManager design tree, in pixels
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related:
  - IModelDoc2.GetFeatureManagerWidth
keywords:
  - featuremanager
  - design
  - tree
  - see
  - also
  - ifeaturemanager
  - ifeatmgrview
  - interfaces
  - width
  - setfeaturemanagerwidth
  - imodeldoc2
  - model
  - doc2
  - feature
  - manager
  - int32
  - change
  - vba
---

# IModelDoc2.SetFeatureManagerWidth

Sets the width of the FeatureManager design tree.

## Signature

```csharp
System.Int32 SetFeatureManagerWidth( 
   System.Int32
Width
)
```
## Parameters

- `Width` (System.Int32): Width of the FeatureManager design tree, in pixels

## Return Value

Status of the set width operation (see Remarks )

## Remarks

The retval argument indicates the success or failure of the set width operation:
A value of...
Indicates setting of window width...
0
Succeeded
-1
Failed

## Examples

- Change Width of FeatureManager Design Tree (VBA) (Change_Width_of_FeatureManager_Design_Tree_Example_VB.htm)

## See Also

- `IModelDoc2.GetFeatureManagerWidth`