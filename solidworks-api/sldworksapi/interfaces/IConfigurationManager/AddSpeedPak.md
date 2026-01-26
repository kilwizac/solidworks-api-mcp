---
type: method
interface: IConfigurationManager
member: AddSpeedPak
returns: System.Object
parameters:
  -
    name: Type
    type: System.Int32
    description: 1 = Geometry 2 = Graphics
  -
    name: PartThreshold
    type: System.Double
    description: 
  -
    name: FaceThreshold
    type: System.Double
    description: See Remarks
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.IsSpeedPak
  - IConfiguration.UpdateSpeedPak
keywords:
  - addspeedpak
  - iconfigurationmanager
  - configuration
  - manager
  - add
  - speed
  - pak
  - type
  - int32
  - part
  - threshold
  - double
  - face
  - object
---

# IConfigurationManager.AddSpeedPak

Obsolete. Superseded by IConfigurationManager::AddSpeedPak2.

## Signature

```csharp
System.Object AddSpeedPak( 
   System.Int32
Type
,
   System.Double
PartThreshold
,
   System.Double
FaceThreshold
)
```
## Parameters

- `Type` (System.Int32): 1 = Geometry 2 = Graphics
- `PartThreshold` (System.Double): 
- `FaceThreshold` (System.Double): See Remarks

## Return Value

SpeedPak configuration

## Remarks

The SOLIDWORKS Design user-interface control corresponding to the FaceThreshhold parameter was removed from SOLIDWORKS 2013 and later. Regardless of the value that you specify for the FaceThreshhold parameter, the value 0 is passed, which results in no faces being included for SpeedPak by a call to this method.
This method was revised as described so that existing applications that call this method will not fail.

## See Also

- `IConfiguration.IsSpeedPak`
- `IConfiguration.UpdateSpeedPak`