---
type: method
interface: ILight
member: GetID
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - id
  - light
  - feature
  - getid
  - ilight
  - int32
  - redirect
  - spotlight
  - vba
  - add
  - vb
  - net
---

# ILight.GetID

Gets the light ID for this light feature.

## Signature

```csharp
System.Int32 GetID()
```
## Parameters

None.

## Return Value

Light ID for this light feature

## Remarks

A light ID:
is unique within the document.
is persistent across SOLIDWORKS Design sessions and never changes, even if you change the name of the light.
can be used to identify a specific light in a document.
cannot be assigned by applications or users.
is not the same as a
persistent reference ID
. You can get a light using its persistent reference ID, but you cannot get a light using this method.

## Examples

- Redirect Spotlight (VBA) (Redirect_Spotlight_Example_VB.htm)
- Add Spotlight and Get Light Feature (C#) (Add_Spotlight_and_Get_Light_Feature_Example_CSharp.htm)
- Add Spotlight and Get Light Feature (VB.NET) (Add_Spotlight_and_Get_Light_Feature_Example_VBNET.htm)
- Add Spotlight and Get Light Feature (VBA) (Add_Spotlight_and_Get_Light_Feature_Example_VB.htm)