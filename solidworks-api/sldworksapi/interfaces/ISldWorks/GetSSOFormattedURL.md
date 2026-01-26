---
type: method
interface: ISldWorks
member: GetSSOFormattedURL
returns: System.String
parameters:
  -
    name: TargetUrl
    type: System.String
    description: URL to format
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related: []
keywords:
  - single
  - sign
  - getssoformattedurl
  - isldworks
  - sld
  - works
  - sso
  - formatted
  - url
  - target
  - string
---

# ISldWorks.GetSSOFormattedURL

Formats the specified URL for single sign-on.

## Signature

```csharp
System.String GetSSOFormattedURL( 
   System.String
TargetUrl
)
```
## Parameters

- `TargetUrl` (System.String): URL to format

## Return Value

URL formatted for single sign-on

## Remarks

Use this method to log into SOLIDWORKS add-ins using the current SOLIDWORKS credentials.