export interface Address {
  id:          number
  street:      string
  no_out:      string
  no_in?:      string
  zip:         string
  city:        string
  country:     string
  phone:       string
  created_at?: string
}
