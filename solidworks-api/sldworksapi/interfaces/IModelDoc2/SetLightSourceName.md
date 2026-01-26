---
type: method
interface: IModelDoc2
member: SetLightSourceName
returns: System.Boolean
parameters:
  -
    name: ID
    type: System.Int32
    description: ID of the light source whose name you want to set
  -
    name: NewName
    type: System.String
    description: Name to be given to the specified light source
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.AddLightSource
  - IModelDoc2.AddLightSourceExtProperty
  - IModelDoc2.AddLightToScene
  - IModelDoc2.AddSceneExtProperty
  - IModelDoc2.DeleteLightSource
  - IModelDoc2.GetLightSourceExtProperty
  - IModelDoc2.GetLightSourceIdFromName
  - IModelDoc2.GetLightSourceName
  - IModelDoc2.ILightSourcePropertyValues
  - IModelDoc2.LightSourcePropertyValues
  - IModelDoc2.ResetLightSourceExtProperty
  - IModelDoc2.ResetSceneExtProperty
  - IModelDoc2.SetLightSourcePropertyValuesVB
keywords:
  - lighting
  - names
  - setlightsourcename
  - imodeldoc2
  - model
  - doc2
  - light
  - source
  - name
  - id
  - int32
  - new
  - string
  - boolean
---

# IModelDoc2.SetLightSourceName

Sets the light source name used internally by the SOLIDWORKS Design software.

## Signature

```csharp
System.Boolean SetLightSourceName( 
   System.Int32
ID
,
   System.String
NewName
)
```
## Parameters

- `ID` (System.Int32): ID of the light source whose name you want to set
- `NewName` (System.String): Name to be given to the specified light source

## Return Value

True if the name is set successfully, false otherwise

## Remarks

The light source ID ranges from 0 to
n
, where
n
= (the total number of light sources - 1). To get the total number of light sources, call
IModelDoc2::GetLightSourceCount
.

## See Also

- `IModelDoc2.AddLightSource`
- `IModelDoc2.AddLightSourceExtProperty`
- `IModelDoc2.AddLightToScene`
- `IModelDoc2.AddSceneExtProperty`
- `IModelDoc2.DeleteLightSource`
- `IModelDoc2.GetLightSourceExtProperty`
- `IModelDoc2.GetLightSourceIdFromName`
- `IModelDoc2.GetLightSourceName`
- `IModelDoc2.ILightSourcePropertyValues`
- `IModelDoc2.LightSourcePropertyValues`
- `IModelDoc2.ResetLightSourceExtProperty`
- `IModelDoc2.ResetSceneExtProperty`
- `IModelDoc2.SetLightSourcePropertyValuesVB`