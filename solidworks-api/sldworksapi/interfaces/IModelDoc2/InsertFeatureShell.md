---
type: method
interface: IModelDoc2
member: InsertFeatureShell
returns: void
parameters:
  -
    name: Thickness
    type: System.Double
    description: Shell thickness in meters
  -
    name: Outward
    type: System.Boolean
    description: True for outside, false for inside
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - features
  - ui
related:
  - IShellFeatureData
keywords:
  - feature
  - see
  - also
  - ifeature
  - shell
  - ishellfeaturedata
  - insert
  - insertfeatureshell
  - imodeldoc2
  - model
  - doc2
  - thickness
  - double
  - outward
  - boolean
  - void
  - create
  - vba
  - vb
  - net
---

# IModelDoc2.InsertFeatureShell

Creates a shell feature.

## Signature

```csharp
void InsertFeatureShell( 
   System.Double
Thickness
,
   System.Boolean
Outward
)
```
## Parameters

- `Thickness` (System.Double): Shell thickness in meters
- `Outward` (System.Boolean): True for outside, false for inside

## Return Value

Unknown.

## Remarks

Before calling this method, select faces to remove to create the shell using
IModelDocExtension::SelectByID2
with Marks of 1. See the SOLIDWORKS Help for information about what entities are valid for selection.
To make a multi-thickness shell, use this method with
IModelDoc2::InsertFeatureShellAddThickness
.

## Examples

- Create Shell Feature (VBA) (Get_Shell_Feature_Data_Example_VB.htm)
- Create Shell Feature (VB.NET) (Create_Shell_Feature_Example_VBNET.htm)
- Create Shell Feature (C#) (Create_Shell_Feature_Example_CSharp.htm)

## See Also

- `IShellFeatureData`