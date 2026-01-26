---
type: property
interface: IModelDoc2
member: LightSourceUserName
returns: System.String
parameters:
  -
    name: ID
    type: System.Int32
    description: Light source ID
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
  - IModelDoc2.DeleteLightSource
  - IModelDoc2.GetLightSourceExtProperty
  - IModelDoc2.GetLightSourceIdFromName
  - IModelDoc2.GetLightSourceName
  - IModelDoc2.ILightSourcePropertyValues
  - IModelDoc2.LightSourcePropertyValues
  - IModelDoc2.ResetLightSourceExtProperty
  - IModelDoc2.SetLightSourceName
  - IModelDoc2.SetLightSourcePropertyValuesVB
keywords:
  - lighting
  - names
  - name
  - lightsourceusername
  - imodeldoc2
  - model
  - doc2
  - light
  - source
  - user
  - id
  - int32
  - string
  - turn
  - lights
  - vba
readonly: null
---

# IModelDoc2.LightSourceUserName

Gets or sets the light source name that is displayed in the SOLIDWORKS Design user interface.

## Signature

```csharp
System.String LightSourceUserName( 
   System.Int32
ID
) {get; set;}
```
## Parameters

- `ID` (System.Int32): Light source ID

## Return Value

User name to give to the light source

## Remarks

The light source ID ranges from 0 to
n
, where
n
= (the total number of light sources - 1). To get the total number of light sources, use
IModelDoc2::GetLightSourceCount
.

## Examples

- Turn Lights On (VBA) (Turn_Lights_On_Example_VB.htm)

## See Also

- `IModelDoc2.AddLightSource`
- `IModelDoc2.AddLightSourceExtProperty`
- `IModelDoc2.DeleteLightSource`
- `IModelDoc2.GetLightSourceExtProperty`
- `IModelDoc2.GetLightSourceIdFromName`
- `IModelDoc2.GetLightSourceName`
- `IModelDoc2.ILightSourcePropertyValues`
- `IModelDoc2.LightSourcePropertyValues`
- `IModelDoc2.ResetLightSourceExtProperty`
- `IModelDoc2.SetLightSourceName`
- `IModelDoc2.SetLightSourcePropertyValuesVB`