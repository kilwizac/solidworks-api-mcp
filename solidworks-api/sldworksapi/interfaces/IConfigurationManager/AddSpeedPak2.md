---
type: method
interface: IConfigurationManager
member: AddSpeedPak2
returns: System.Object
parameters:
  -
    name: Type
    type: System.Int32
    description: Selection type: 1 = Geometry 2 = Graphics
  -
    name: PartThreshold
    type: System.Double
    description: 1.0 >= Double value for part or body selection threshold >= 0.0; 1.0 selects nothing, and 0.0 selects all (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAssemblyDoc.CreateSpeedPak
  - IConfiguration.IsSpeedPak
  - IConfiguration.UpdateSpeedPak
keywords:
  - speedpak
  - configuration
  - see
  - also
  - iconfiguration
  - assemblies
  - iassemblydoc
  - addspeedpak2
  - iconfigurationmanager
  - manager
  - add
  - speed
  - pak2
  - type
  - int32
  - part
  - threshold
  - double
  - object
  - create
  - vba
  - vb
  - net
---

# IConfigurationManager.AddSpeedPak2

Creates a SpeedPak configuration that includes all faces and the specified threshold of parts or bodies for the active assembly configuration.

## Signature

```csharp
System.Object AddSpeedPak2( 
   System.Int32
Type
,
   System.Double
PartThreshold
)
```
## Parameters

- `Type` (System.Int32): Selection type: 1 = Geometry 2 = Graphics
- `PartThreshold` (System.Double): 1.0 >= Double value for part or body selection threshold >= 0.0; 1.0 selects nothing, and 0.0 selects all (see Remarks )

## Return Value

SpeedPak configuration

## Remarks

PartThreshold corresponds to the value of the
Bodies to Include
slider on the SpeedPak PropertyManager page.
This method includes all faces in the SpeedPak configuration.

## Examples

- Create a SpeedPak Configuration (VBA) (Create_SpeedPak_Example_VB.htm)
- Create a Speedpak Configuration (VB.NET) (Create_SpeedPak_Example_VBNET.htm)
- Create a Speedpak Configuration (C#) (Create_Speedpak_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.CreateSpeedPak`
- `IConfiguration.IsSpeedPak`
- `IConfiguration.UpdateSpeedPak`