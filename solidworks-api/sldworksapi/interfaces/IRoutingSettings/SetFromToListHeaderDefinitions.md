---
type: method
interface: IRoutingSettings
member: SetFromToListHeaderDefinitions
returns: System.Boolean
parameters:
  -
    name: WireNameHdr
    type: System.String
    description: Wire name header
  -
    name: FromRefHdr
    type: System.String
    description: "From" reference header
  -
    name: FromPinHdr
    type: System.String
    description: "From" pin header
  -
    name: FromPartnoHdr
    type: System.String
    description: "From" part number header
  -
    name: ToRefHdr
    type: System.String
    description: "To" reference header
  -
    name: ToPinHdr
    type: System.String
    description: "To" pin header
  -
    name: ToPartnoHdr
    type: System.String
    description: "To" part number header
  -
    name: CableNameHdr
    type: System.String
    description: Cable name header
  -
    name: CoreNameHdr
    type: System.String
    description: Core name header
  -
    name: ColourHdr
    type: System.String
    description: Color header
  -
    name: WireSpecHdr
    type: System.String
    description: Wire specification header
  -
    name: OtherAttribHdr
    type: System.String
    description: Miscellaneous header
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IRoutingSettings.GetFromToListHeaderDefinitions
keywords:
  - setfromtolistheaderdefinitions
  - iroutingsettings
  - routing
  - settings
  - list
  - header
  - definitions
  - wire
  - name
  - hdr
  - string
  - ref
  - pin
  - partno
  - cable
  - core
  - colour
  - spec
  - other
  - attrib
  - boolean
---

# IRoutingSettings.SetFromToListHeaderDefinitions

Sets the headers in a routing from-to list.

## Signature

```csharp
System.Boolean SetFromToListHeaderDefinitions( 
   System.String
WireNameHdr
,
   System.String
FromRefHdr
,
   System.String
FromPinHdr
,
   System.String
FromPartnoHdr
,
   System.String
ToRefHdr
,
   System.String
ToPinHdr
,
   System.String
ToPartnoHdr
,
   System.String
CableNameHdr
,
   System.String
CoreNameHdr
,
   System.String
ColourHdr
,
   System.String
WireSpecHdr
,
   System.String
OtherAttribHdr
)
```
## Parameters

- `WireNameHdr` (System.String): Wire name header
- `FromRefHdr` (System.String): "From" reference header
- `FromPinHdr` (System.String): "From" pin header
- `FromPartnoHdr` (System.String): "From" part number header
- `ToRefHdr` (System.String): "To" reference header
- `ToPinHdr` (System.String): "To" pin header
- `ToPartnoHdr` (System.String): "To" part number header
- `CableNameHdr` (System.String): Cable name header
- `CoreNameHdr` (System.String): Core name header
- `ColourHdr` (System.String): Color header
- `WireSpecHdr` (System.String): Wire specification header
- `OtherAttribHdr` (System.String): Miscellaneous header

## Return Value

True if successful, false if not

## See Also

- `IRoutingSettings.GetFromToListHeaderDefinitions`