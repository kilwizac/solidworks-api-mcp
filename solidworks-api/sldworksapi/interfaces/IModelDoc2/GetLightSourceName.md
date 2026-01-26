---
type: method
interface: IModelDoc2
member: GetLightSourceName
returns: System.String
parameters:
  -
    name: ID
    type: System.Int32
    description: ID of light source
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
  - IModelDoc2.GetLightSourceCount
  - IModelDoc2.GetLightSourceExtProperty
  - IModelDoc2.GetLightSourceIdFromName
  - IModelDoc2.ILightSourcePropertyValues
  - IModelDoc2.LightSourcePropertyValues
  - IModelDoc2.LightSourceUserName
  - IModelDoc2.ResetLightSourceExtProperty
  - IModelDoc2.SetLightSourceName
  - IModelDoc2.SetLightSourcePropertyValuesVB
keywords:
  - lighting
  - names
  - getlightsourcename
  - imodeldoc2
  - model
  - doc2
  - light
  - source
  - name
  - id
  - int32
  - string
  - turn
  - lights
  - vba
---

# IModelDoc2.GetLightSourceName

Gets the name of a light source used internally by the SOLIDWORKS Design application.

## Signature

```csharp
System.String GetLightSourceName( 
   System.Int32
ID
)
```
## Parameters

- `ID` (System.Int32): ID of light source

## Return Value

Name of the light source

## Remarks

Values for id can range from 0 to
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
- `IModelDoc2.GetLightSourceCount`
- `IModelDoc2.GetLightSourceExtProperty`
- `IModelDoc2.GetLightSourceIdFromName`
- `IModelDoc2.ILightSourcePropertyValues`
- `IModelDoc2.LightSourcePropertyValues`
- `IModelDoc2.LightSourceUserName`
- `IModelDoc2.ResetLightSourceExtProperty`
- `IModelDoc2.SetLightSourceName`
- `IModelDoc2.SetLightSourcePropertyValuesVB`