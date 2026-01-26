---
type: property
interface: IMessageBarDefinition
member: ResponseBText
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - responsebtext
  - imessagebardefinition
  - message
  - bar
  - definition
  - response
  - text
  - string
readonly: null
---

# IMessageBarDefinition.ResponseBText

Gets or sets the text displayed on the second button or command link of this message bar.

## Signature

```csharp
System.String ResponseBText {get; set;}
```
## Parameters

None.

## Return Value

Text displayed on second user response control; default is an empty string

## Remarks

This property must be set to a non-empty string if
IMessageBarDefinition::ResponseBType
is not
swUserMessageBarResponseType_e
.swUserMessageBarResponseType_None.