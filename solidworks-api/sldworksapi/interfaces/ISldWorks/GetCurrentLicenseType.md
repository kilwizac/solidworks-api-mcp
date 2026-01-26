---
type: method
interface: ISldWorks
member: GetCurrentLicenseType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDocExtension.GetLicenseType
keywords:
  - solidworks
  - licenses
  - getcurrentlicensetype
  - isldworks
  - sld
  - works
  - current
  - license
  - type
  - int32
  - types
  - vb
  - net
  - vba
---

# ISldWorks.GetCurrentLicenseType

Gets the type of license for the current SOLIDWORKS Design session.

## Signature

```csharp
System.Int32 GetCurrentLicenseType()
```
## Parameters

None.

## Return Value

Type of SOLIDWORKS Design license as defined in swLicenseType_e

## Examples

- Get License Types of SOLIDWORKS (C#) (Get_License_Types_of_SOLIDWORKS_Example_CSharp.htm)
- Get License Types of SOLIDWORKS (VB.NET) (Get_License_Types_of_SOLIDWORKS_Example_VBNET.htm)
- Get License Types of SOLIDWORKS (VBA) (Get_License_Types_of_SOLIDWORKS_Example_VB.htm)

## See Also

- `IModelDocExtension.GetLicenseType`