---
type: method
interface: IModelDocExtension
member: GetLicenseType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related: []
keywords:
  - solidworks
  - licenses
  - getlicensetype
  - imodeldocextension
  - model
  - doc
  - extension
  - license
  - type
  - int32
  - vb
  - net
  - vba
---

# IModelDocExtension.GetLicenseType

Gets the type of SOLIDWORKS license used when the model was created.

## Signature

```csharp
System.Int32 GetLicenseType()
```
## Parameters

None.

## Return Value

Type of SOLIDWORKS license as defined in swLicenseType_e

## Remarks

This method always returns 0 (swLicenseType_e.swLicenseType_Full) for files saved under any commercial SOLIDWORKS license.
To get the license type of this SOLIDWORKS installation, use
ISldWorks::GetCurrentLicenseType
.

## Examples

- Get License Type of SOLIDWORKS (C#) (Get_License_Types_of_SOLIDWORKS_Example_CSharp.htm)
- Get License Type of SOLIDWORKS (VB.NET) (Get_License_Types_of_SOLIDWORKS_Example_VBNET.htm)
- Get License Type of SOLIDWORKS (VBA) (Get_License_Types_of_SOLIDWORKS_Example_VB.htm)