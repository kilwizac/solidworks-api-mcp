---
type: method
interface: IFeatureManager
member: InsertDeleteBody2
returns: Feature
parameters:
  -
    name: KeepBodies
    type: System.Boolean
    description: True to keep bodies, false to delete bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDeleteBodyFeatureData
keywords:
  - bodies
  - see
  - also
  - ibody2
  - deleted
  - feature
  - ifeature
  - body
  - keep
  - insertdeletebody2
  - ifeaturemanager
  - manager
  - insert
  - delete
  - body2
  - boolean
  - vba
  - vb
  - net
---

# IFeatureManager.InsertDeleteBody2

Inserts a Body-Delete/Keep feature.

## Signature

```csharp
Feature InsertDeleteBody2( 
   System.Boolean
KeepBodies
)
```
## Parameters

- `KeepBodies` (System.Boolean): True to keep bodies, false to delete bodies

## Return Value

IFeature

## Examples

- Insert Body-Delete/Keep Feature (VBA) (Insert_Delete_Body_Feature_Example_VB.htm)
- Insert Body-Delete/Keep Feature (VB.NET) (Insert_Delete_Body_Feature_Example_VBNET.htm)
- Insert Body-Delete/Keep Feature (C#) (Insert_Delete_Body_Feature_Example_CSharp.htm)

## See Also

- `IDeleteBodyFeatureData`