---
type: method
interface: ISwPEClassFactory
member: SetPartnerKey
returns: System.Int32
parameters:
  -
    name: StrPartnerEntitlement
    type: System.String
    description: License key string (see Remarks )
  -
    name: TokenObject
    type: System.Object
    description: ISwPEToken ( for future use only - see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - parts
related: []
keywords:
  - setpartnerkey
  - iswpeclassfactory
  - sw
  - pe
  - factory
  - partner
  - key
  - str
  - entitlement
  - string
  - token
  - object
  - int32
---

# ISwPEClassFactory.SetPartnerKey

Sets the license key which SOLIDWORKS uses to verify SOLIDWORKS Partner entitlement.

## Signature

```csharp
System.Int32 SetPartnerKey( 
   System.String
StrPartnerEntitlement
,
   out System.Object
TokenObject
)
```
## Parameters

- `StrPartnerEntitlement` (System.String): License key string (see Remarks )
- `TokenObject` (System.Object): ISwPEToken ( for future use only - see Remarks )

## Return Value

Return code as defined by swPartnerEntitlementStatus_e

## Remarks

When this method is called, SOLIDWORKS compares the registry against these values in the license key specified in StrPartnerEntitlement:
SOLIDWORKS Partner entitlement
SOLIDWORKS version
Add-in name
Add-in GUID
Expiration date
See
SOLIDWORKS Partner Program
.
TokenObject is for future use only.