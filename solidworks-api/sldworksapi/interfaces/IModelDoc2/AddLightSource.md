---
type: method
interface: IModelDoc2
member: AddLightSource
returns: System.Boolean
parameters:
  -
    name: IdName
    type: System.String
    description: New light source ID name
  -
    name: LTyp
    type: System.Int32
    description: New light source type: 1 = Ambient light 2 = Spot light 3 = Point light 4 = Directional light
  -
    name: UserName
    type: System.String
    description: New light source user name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.AddLightSourceExtProperty
  - IModelDoc2.DeleteLightSource
  - IModelDoc2.GetLightSourceCount
  - IModelDoc2.GetLightSourceExtProperty
  - IModelDoc2.GetLightSourceIdFromName
  - IModelDoc2.GetLightSourceName
  - IModelDoc2.ILightSourcePropertyValues
  - IModelDoc2.LightSourcePropertyValues
  - IModelDoc2.LightSourceUserName
  - IModelDoc2.ResetLightSourceExtProperty
  - IModelDoc2.SetLightSourceName
  - IModelDoc2.SetLightSourcePropertyValuesVB
keywords:
  - ambient
  - light
  - directional
  - lights
  - lighting
  - source
  - point
  - spot
  - addlightsource
  - imodeldoc2
  - model
  - doc2
  - add
  - id
  - name
  - string
  - typ
  - int32
  - user
  - boolean
  - spotlight
  - feature
  - vb
  - net
  - vba
---

# IModelDoc2.AddLightSource

Adds a type of light source to a scene with the specified names.

## Signature

```csharp
System.Boolean AddLightSource( 
   System.String
IdName
,
   System.Int32
LTyp
,
   System.String
UserName
)
```
## Parameters

- `IdName` (System.String): New light source ID name
- `LTyp` (System.Int32): New light source type: 1 = Ambient light 2 = Spot light 3 = Point light 4 = Directional light
- `UserName` (System.String): New light source user name

## Return Value

True if the light source creation was successful, false if not; for example, creation of a light source fails if IdName is not unique within this model

## Examples

- Add Spotlight and Get Light Feature (C#) (Add_Spotlight_and_Get_Light_Feature_Example_CSharp.htm)
- Add Spotlight and Get Light Feature (VB.NET) (Add_Spotlight_and_Get_Light_Feature_Example_VBNET.htm)
- Add Spotlight and Get Light Feature (VBA) (Add_Spotlight_and_Get_Light_Feature_Example_VB.htm)

## See Also

- `IModelDoc2.AddLightSourceExtProperty`
- `IModelDoc2.DeleteLightSource`
- `IModelDoc2.GetLightSourceCount`
- `IModelDoc2.GetLightSourceExtProperty`
- `IModelDoc2.GetLightSourceIdFromName`
- `IModelDoc2.GetLightSourceName`
- `IModelDoc2.ILightSourcePropertyValues`
- `IModelDoc2.LightSourcePropertyValues`
- `IModelDoc2.LightSourceUserName`
- `IModelDoc2.ResetLightSourceExtProperty`
- `IModelDoc2.SetLightSourceName`
- `IModelDoc2.SetLightSourcePropertyValuesVB`